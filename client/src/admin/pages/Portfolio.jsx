
import { MoreVertical } from 'lucide-react';
import { useEffect, useState } from 'react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
const API_URL = import.meta.env.VITE_API_URL ;
import IsolatedModal, {
  Button as BWButton,
  Input as BWInput,
  Textarea as BWTextarea,
  FileInput,
  FormGroup,
  ImagePreview,
  Label,
  PdfInput,
} from '../components/common/IsolatedModal';

const API_BASE = `${API_URL}/api/portfolio`;
const PAGE_LIMIT = 10;

const PortfolioReleasePage = () => {
  const [portfolioReleases, setPortfolioReleases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    hasNextPage: false,
    hasPrevPage: false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPortfolio, setEditingPortfolio] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    invest: false,
  });

  const [imageFiles, setImageFiles] = useState([]);
  const [pdfFiles, setPdfFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [imagesToDelete, setImagesToDelete] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [existingPdfs, setExistingPdfs] = useState([]);
  const [pdfsToDelete, setPdfsToDelete] = useState([]);
  const [openMenuId, setOpenMenuId] = useState(null);

  // Cleanup blob URLs
  useEffect(() => {
    return () => {
      imagePreviews.forEach((url) => {
        if (url.startsWith('blob:')) {
          URL.revokeObjectURL(url);
        }
      });
    };
  }, [imagePreviews]);

  const fetchPortfolioReleases = async (page = 1) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE}?page=${page}&limit=${PAGE_LIMIT}`);

      if (!response.ok) throw new Error('Failed to fetch portfolios');

      const data = await response.json();

      const transformed = data.portfolio.map((item) => ({
        _id: item._id,
        title: item.title,
        description: item.description || '',
        imageUrls: item.images.map((url) =>
          url.startsWith('http') ? url : `${API_URL}${url}`
        ),
        images: item.images,
        pdfUrls: item.Pdf
          ? item.Pdf.map((pdf) =>
            pdf.startsWith('http') ? pdf : `${API_URL}${pdf}`
          )
          : [],
        invest: !!item.invest,
        date: new Date(item.createdAt).toLocaleDateString(),
        createdAt: item.createdAt,
      }));

      setPortfolioReleases(transformed);
      setPagination(data.pagination);
    } catch (error) {
      console.error('Error fetching portfolios:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolioReleases();
  }, []);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      fetchPortfolioReleases(newPage);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this portfolio?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch(`${API_BASE}/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (res.ok) {
        fetchPortfolioReleases(pagination.currentPage);
      } else {
        const error = await res.json();
        alert(error.message || 'Failed to delete portfolio');
      }
      setOpenMenuId(null);
    } catch (err) {
      console.error(err);
      alert('Error deleting portfolio');
    }
  };

  const handleMenuToggle = (id) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  const handleRemoveImage = (index) => {
    if (index < existingImages.length) {
      const imageToDelete = existingImages[index];
      setImagesToDelete((prev) => [...prev, imageToDelete]);
      setExistingImages((prev) => prev.filter((_, i) => i !== index));
    } else {
      const fileIndex = index - existingImages.length;
      if (fileIndex >= 0 && fileIndex < imageFiles.length) {
        const previewIndex = index;
        if (imagePreviews[previewIndex]?.startsWith('blob:')) {
          URL.revokeObjectURL(imagePreviews[previewIndex]);
        }
        setImageFiles((prev) => {
          const newFiles = [...prev];
          newFiles.splice(fileIndex, 1);
          return newFiles;
        });
      }
    }
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  // const handleRemovePdf = (index) => {
  //   if (index < existingPdfs.length) {
  //     const pdfPath = existingPdfs[index];
  //     setPdfsToDelete((prev) => [...prev, pdfPath]);
  //     setExistingPdfs((prev) => prev.filter((_, i) => i !== index));
  //   } else {
  //     const fileIndex = index - existingPdfs.length;
  //     if (fileIndex >= 0 && fileIndex < pdfFiles.length) {
  //       setPdfFiles((prev) => {
  //         const newFiles = [...prev];
  //         newFiles.splice(fileIndex, 1);
  //         return newFiles;
  //       });
  //     }
  //   }
  // };
  const handleRemovePdf = (index) => {
    if (index < existingPdfs.length) {
      const pdfPath = existingPdfs[index];
      setPdfsToDelete((prev) => [...prev, pdfPath]);
      setExistingPdfs((prev) => prev.filter((_, i) => i !== index));
    } else {
      const fileIndex = index - existingPdfs.length;
      setPdfFiles((prev) => prev.filter((_, i) => i !== fileIndex));
    }
  };


  const handleEdit = (release) => {
    setEditingPortfolio(release);
    setFormData({
      title: release.title,
      description: release.description,
      invest: release.invest,
    });

    setExistingImages(release.images || []);
    setExistingPdfs(release.pdfUrls.map(url =>
      url.replace('http://localhost:5000', '')
    ));
    // store paths only
    setImageFiles([]);
    setPdfFiles([]);
    setImagesToDelete([]);
    setPdfsToDelete([]);
    setImagePreviews(release.imageUrls || []);

    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setEditingPortfolio(null);
    setFormData({
      title: '',
      description: '',
      invest: false,
    });
    setExistingImages([]);
    setExistingPdfs([]);
    setImageFiles([]);
    setPdfFiles([]);
    setImagesToDelete([]);
    setPdfsToDelete([]);
    setImagePreviews([]);
    setIsModalOpen(true);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setImageFiles((prev) => [...prev, ...files]);
    setImagePreviews((prev) => [...prev, ...newPreviews]);
  };

  const handlePdfChange = (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length) {
      setPdfFiles((prev) => [...prev, ...files]);
    }
  };

  const handleSubmit = async () => {
    if (!formData.title.trim()) {
      alert('Title is required');
      return;
    }

    // Better validation
    const remainingImages = existingImages.length - imagesToDelete.length;
    const totalImages = remainingImages + imageFiles.length;

    // if (editingPortfolio && totalImages === 0) {
    //   alert('At least one image is required');
    //   return;
    // }
    // if (!editingPortfolio && imageFiles.length === 0) {
    //   alert('At least one image is required');
    //   return;
    // }

    setSaving(true);

    try {
      const form = new FormData();
      form.append('title', formData.title);
      form.append('description', formData.description || '');
      form.append('invest', formData.invest ? 'true' : 'false');

      // New uploaded files
      imageFiles.forEach((file) => form.append('images', file));
      pdfFiles.forEach((file) => form.append('Pdf', file));

      // For edit: send kept paths + deletions
      if (editingPortfolio) {
        const keptImages = existingImages.filter(
          (path) => !imagesToDelete.includes(path)
        );
        keptImages.forEach((path) => form.append('images', path));

        if (imagesToDelete.length > 0) {
          form.append('imagesToDelete', JSON.stringify(imagesToDelete));
        }

        const keptPdfs = existingPdfs.filter(
          (path) => !pdfsToDelete.includes(path)
        );
        keptPdfs.forEach((path) => form.append('pdfsToDelete', JSON.stringify(pdfsToDelete)));

        if (pdfsToDelete.length > 0) {
          form.append('pdfsToDelete', JSON.stringify(pdfsToDelete));
        }
      }

      const token = localStorage.getItem('adminToken');
      const url = editingPortfolio
        ? `${API_BASE}/${editingPortfolio._id}`
        : API_BASE;

      const res = await fetch(url, {
        method: editingPortfolio ? 'PUT' : 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: form,
      });

      const responseData = await res.json();

      if (!res.ok) {
        throw new Error(responseData.message || (editingPortfolio ? 'Update failed' : 'Create failed'));
      }

      if (editingPortfolio) {
        await fetchPortfolioReleases(pagination.currentPage);
      } else {
        await fetchPortfolioReleases(1);
      }

      setIsModalOpen(false);
      setOpenMenuId(null);
      alert(responseData.message || 'Operation successful');
    } catch (err) {
      console.error('Save error:', err);
      alert(err.message || 'Failed to save portfolio');
    } finally {
      setSaving(false);
    }
  };

  const totalImagesCount = existingImages.length - imagesToDelete.length + imageFiles.length;
  const getPdfName = (path) => path.split('/').pop();

  return (
    <div className="fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Portfolios</h1>
          <p className="text-gray-600 mt-1">Manage your portfolios and announcements</p>
        </div>
        <Button variant="primary" onClick={handleAdd} className="flex items-center space-x-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>Add New</span>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Total Portfolios</p>
              <p className="text-3xl font-bold">{pagination.totalItems}</p>
            </div>
            <svg className="w-12 h-12 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
        </div>
      </div>

      {loading && (
        <div className="p-8 text-center bg-white rounded-lg">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
          <p className="mt-2 text-gray-600">Loading portfolios...</p>
        </div>
      )}

      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioReleases.map((release) => (
            <Card key={release._id} className="portfolio-card overflow-hidden p-0">
              <div className="relative">
                <img
                  src={release.imageUrls[0]}
                  alt={release.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                  {release.imageUrls.length} image{release.imageUrls.length !== 1 ? 's' : ''}
                </div>
                {release.invest && (
                  <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    Investment Portfolio
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500">{release.date}</span>
                  <div className="relative">
                    <button
                      onClick={() => handleMenuToggle(release._id)}
                      className="p-1 rounded hover:bg-gray-100"
                    >
                      <MoreVertical size={18} />
                    </button>
                    {openMenuId === release._id && (
                      <div className="absolute right-0 mt-1 w-28 bg-white border rounded-md shadow-lg z-20">
                        <button
                          onClick={() => handleEdit(release)}
                          className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(release._id)}
                          className="block w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-red-50"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{release.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{release.description}</p>
                {release.pdfUrls.length > 0 && (
                  <div className="text-xs text-blue-600">
                    {release.pdfUrls.length} PDF document{release.pdfUrls.length !== 1 ? 's' : ''} attached
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}

      {pagination.totalPages > 1 && (
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => handlePageChange(pagination.currentPage - 1)}
            disabled={!pagination.hasPrevPage}
            className={`px-4 py-2 rounded ${pagination.hasPrevPage ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
          >
            Previous
          </button>
          <div className="text-sm text-gray-600">
            Page {pagination.currentPage} of {pagination.totalPages}
            <span className="mx-2">•</span>
            Total {pagination.totalItems} releases
          </div>
          <button
            onClick={() => handlePageChange(pagination.currentPage + 1)}
            disabled={!pagination.hasNextPage}
            className={`px-4 py-2 rounded ${pagination.hasNextPage ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
          >
            Next
          </button>
        </div>
      )}

      {!loading && portfolioReleases.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          <p className="mt-2 text-gray-600">No portfolios yet</p>
        </div>
      )}

      <IsolatedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingPortfolio ? 'Edit Portfolio' : 'Add Portfolio'}
        footer={
          <>
            <BWButton variant="secondary" onClick={() => setIsModalOpen(false)} disabled={saving}>
              Cancel
            </BWButton>
            <BWButton variant="primary" onClick={handleSubmit} disabled={saving}>
              {saving ? 'Saving...' : editingPortfolio ? 'Update' : 'Add'}
            </BWButton>
          </>
        }
      >
        <FormGroup>
          <Label required>Title</Label>
          <BWInput
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Enter portfolio title"
          />
        </FormGroup>

        <FormGroup>
          <Label>Description</Label>
          <BWTextarea
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Enter description"
          />
        </FormGroup>

        <FormGroup>
          <Label required={!editingPortfolio}>Images</Label>
          <FileInput onChange={handleImageChange} multiple accept="image/*" />
          <div className="text-sm text-gray-500 mt-1 mb-2">
            {editingPortfolio
              ? `Current images: ${existingImages.length}. You can add more or delete existing ones.`
              : 'Add at least one image'}
          </div>

          <div className="grid grid-cols-3 gap-2 mt-2">
            {imagePreviews.map((url, index) => {
              const isExisting = index < existingImages.length;
              const isMarkedForDeletion = isExisting && imagesToDelete.includes(existingImages[index]);

              return (
                <div key={index} className="relative">
                  <ImagePreview
                    src={url}
                    alt={`Preview ${index + 1}`}
                    className={isMarkedForDeletion ? 'opacity-50 border-2 border-red-500' : ''}
                  />
                  {isMarkedForDeletion && (
                    <div className="absolute inset-0 bg-red-500 bg-opacity-20 flex items-center justify-center">
                      <span className="text-red-600 font-bold">To be deleted</span>
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                  >
                    ×
                  </button>
                  {isExisting && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs text-center py-1">
                      Existing
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-sm text-gray-500 mt-2">
            Total images: {totalImagesCount}
            {imagesToDelete.length > 0 && (
              <span className="block mt-1 text-red-500">
                {imagesToDelete.length} image{imagesToDelete.length !== 1 ? 's' : ''} marked for deletion
              </span>
            )}
          </div>
        </FormGroup>

        <FormGroup>
          <Label>Investment :</Label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="invest"
                checked={formData.invest === true}
                onChange={() => setFormData({ ...formData, invest: true })}
                className="mr-2"
              />
              <span>Investment</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="invest"
                checked={formData.invest === false}
                onChange={() => setFormData({ ...formData, invest: false })}
                className="mr-2"
              />
              <span>Not  Investment</span>
            </label>
          </div>
        </FormGroup>

        <FormGroup>
          <Label>Upload Documents (PDF only)</Label>
          <PdfInput onChange={handlePdfChange} multiple accept=".pdf,application/pdf" />

          {(existingPdfs.length > 0 || pdfFiles.length > 0) && (
            <div className="mt-2 space-y-1">
              {existingPdfs.map((pdfPath, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                  <span className="text-sm text-gray-700 truncate">
                    📄 {
                    // pdfPath.split('/').pop()
                    getPdfName(pdfPath)
                    }
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemovePdf(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ×
                  </button>
                </div>
              ))}

              {pdfFiles.map((file, index) => (
                <div key={index + existingPdfs.length} className="flex items-center justify-between bg-blue-50 p-2 rounded">
                  <span className="text-sm text-blue-700 truncate">
                    📄 {file.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemovePdf(existingPdfs.length + index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="text-sm text-gray-500 mt-1">
            {existingPdfs.length + pdfFiles.length} PDF document
            {(existingPdfs.length + pdfFiles.length) !== 1 ? 's' : ''} attached
          </div>
        </FormGroup>
      </IsolatedModal>
    </div>
  );
};

export default PortfolioReleasePage;