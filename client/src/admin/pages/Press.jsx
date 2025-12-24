import React, { useState, useEffect } from 'react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import IsolatedModal, { 
  FormGroup, 
  Label, 
  Input as BWInput, 
  Textarea as BWTextarea, 
  FileInput, 
  ImagePreview, 
  Button as BWButton 
} from '../components/common/IsolatedModal';
import { MoreVertical } from 'lucide-react';

const PressReleasePage = () => {
  const [pressReleases, setPressReleases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalPress: 0,
    hasNextPage: false,
    hasPrevPage: false
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPress, setEditingPress] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageFiles: [],
    imagesToDelete: []
  });
  
  // Ensure formData always has imagesToDelete property
  useEffect(() => {
    if (!Object.prototype.hasOwnProperty.call(formData, 'imagesToDelete')) {
      setFormData(prev => ({
        ...prev,
        imagesToDelete: []
      }));
    }
  }, [formData]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [openMenuId, setOpenMenuId] = useState(null);

  // Fetch press releases from backend with pagination
  const fetchPressReleases = async (page = 1) => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/api/press?page=${page}&limit=10`);
      const data = await response.json();
      // Transform data for display
      const transformedData = data.press.map(press => ({
        _id: press._id,
        title: press.title,
        description: press.description || '',
        imageUrls: press.images.map(url => 
          url.startsWith('http') ? url : `http://localhost:5000${url}`
        ),
        // Store original images array for reference in deletion logic
        images: press.images,
        date: new Date(press.createdAt).toLocaleDateString(),
        createdAt: press.createdAt
      }));
      setPressReleases(transformedData);
      setPagination(data.pagination);
    } catch (error) {
      console.error('Error fetching press releases:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPressReleases();
  }, []);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      fetchPressReleases(newPage);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this press release?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/press/${id}`, {
          method: 'DELETE',
        });
        
        if (response.ok) {
          // Refresh the current page
          await fetchPressReleases(pagination.currentPage);
        } else {
          throw new Error('Failed to delete press release');
        }
        
        setOpenMenuId(null);
      } catch (error) {
        console.error('Error deleting press release:', error);
        alert('Failed to delete press release');
      }
    }
  };

  const handleMenuToggle = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const handleRemoveImage = (index) => {
    // Check if this is an existing image (from the original release) or a newly added one
    const imageUrl = imagePreviews[index];
    
    // Find if this image URL exists in the original release
    // We need to find the original database URL, not the transformed one
    let originalImageUrl = null;
    if (editingPress) {
      // Find the corresponding original URL from the database
      const previewIndex = editingPress.imageUrls.indexOf(imageUrl);
      if (previewIndex !== -1) {
        // Get the original URL from the database (without the http://localhost:5000 prefix)
        originalImageUrl = editingPress.images[previewIndex];
      }
    }
    
    const isExistingImage = !!originalImageUrl;
    
    if (isExistingImage) {
      // For existing images, mark them for deletion using the original database URL
      setFormData({
        ...formData,
        imagesToDelete: [...(formData.imagesToDelete || []), originalImageUrl]
      });
    } else {
      // For newly added images, remove them from imageFiles
      // Calculate the index in the imageFiles array
      const existingImageCount = editingPress ? editingPress.imageUrls.length : 0;
      const fileIndex = index - existingImageCount;
      
      if (fileIndex >= 0 && fileIndex < formData.imageFiles.length) {
        const newFiles = [...formData.imageFiles];
        newFiles.splice(fileIndex, 1);
        setFormData({
          ...formData,
          imageFiles: newFiles
        });
      }
    }
    
    // Remove from previews
    const newPreviews = [...imagePreviews];
    newPreviews.splice(index, 1);
    setImagePreviews(newPreviews);
  };

  const handleEdit = (release) => {
    setEditingPress(release);
    setFormData({
      title: release.title,
      description: release.description,
      imageFiles: [],
      imagesToDelete: []
    });
    // Set existing images as previews
    setImagePreviews(release.imageUrls);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setEditingPress(null);
    setFormData({
      title: '',
      description: '',
      imageFiles: [],
      imagesToDelete: []
    });
    setImagePreviews([]);
    setIsModalOpen(true);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const newImageUrls = files.map(file => URL.createObjectURL(file));
      setFormData({
        ...formData,
        imageFiles: [...formData.imageFiles, ...files]
      });
      setImagePreviews([...imagePreviews, ...newImageUrls]);
    }
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.description) {
      alert('Please fill all required fields');
      return;
    }

    if (formData.imageFiles.length === 0 && !editingPress) {
      alert('Please upload at least one image');
      return;
    }

    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('description', formData.description);
      
      formData.imageFiles.forEach(file => {
        data.append('images', file);
      });

      // Add images to delete if editing
      if (editingPress && formData.imagesToDelete && formData.imagesToDelete.length > 0) {
        // Send as JSON string to ensure proper parsing
        data.append('imagesToDelete', JSON.stringify(formData.imagesToDelete));
      }

      if (editingPress) {
        // Update existing
        const response = await fetch(`http://localhost:5000/api/press/${editingPress._id}`, {
          method: 'PUT',
          body: data,
        });
        
        if (response.ok) {
          // Refresh the current page
          await fetchPressReleases(pagination.currentPage);
        } else {
          alert('Failed to update press release');
        }
      } else {
        // Add new
        const response = await fetch('http://localhost:5000/api/press', {
          method: 'POST',
          body: data,
        });
        
        if (response.ok) {
          // Refresh the current page
          await fetchPressReleases(1); // Go to first page to see new item
        } else {
          alert('Failed to create press release');
        }
      }
      setIsModalOpen(false);
      setOpenMenuId(null);
    } catch (error) {
      console.error('Error saving press release:', error);
      alert('Failed to save press release');
    }
  };

  return (
    <div className="fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Press Releases</h1>
          <p className="text-gray-600 mt-1">Manage your press releases and announcements</p>
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
              <p className="text-purple-100 text-sm">Total Press Releases</p>
              <p className="text-3xl font-bold">{pressReleases.length}</p>
            </div>
            <svg className="w-12 h-12 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="p-8 text-center bg-white rounded-lg">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
          <p className="mt-2 text-gray-600">Loading press releases...</p>
        </div>
      )}

      {/* Press Releases Grid */}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pressReleases.map((release) => (
            <Card key={release._id} className="press-card overflow-hidden p-0">
            <div className="relative">
              <img 
                src={release.imageUrls[0]} 
                alt={release.title} 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                {release.imageUrls.length} image{release.imageUrls.length !== 1 ? 's' : ''}
              </div>
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
              {/* Removed the inline edit/delete buttons */}
            </div>
          </Card>
        ))}
        </div>
      )}

      {/* Pagination */}
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
            Total {pagination.totalPress} releases
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

      {!loading && pressReleases.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          <p className="mt-2 text-gray-600">No press releases yet</p>
        </div>
      )}

      {/* Add/Edit Modal - Black & White Theme */}
      <IsolatedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingPress ? 'Edit Press Release' : 'Add Press Release'}
        footer={
          <>
            <BWButton variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </BWButton>
            <BWButton variant="primary" onClick={handleSubmit}>
              {editingPress ? 'Update' : 'Add'}
            </BWButton>
          </>
        }
      >
        <FormGroup>
          <Label required>Title</Label>
          <BWInput
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Enter press release title"
          />
        </FormGroup>
        
        <FormGroup>
          <Label required>Description</Label>
          <BWTextarea
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Enter description"
          />
        </FormGroup>
        
        <FormGroup>
          <Label>Images</Label>
          <FileInput
            onChange={handleImageChange}
            multiple
          />
          <div className="grid grid-cols-3 gap-2 mt-2">
            {imagePreviews.map((url, index) => (
              <div key={index} className="relative">
                <ImagePreview src={url} alt={`Preview ${index}`} />
                <button 
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Selected {imagePreviews.length} image{imagePreviews.length !== 1 ? 's' : ''}
            {editingPress && imagePreviews.length === 0 && (
              <span className="block mt-1">Existing images will be preserved.</span>
            )}
            {formData.imagesToDelete && formData.imagesToDelete.length > 0 && (
              <span className="block mt-1 text-red-500">{formData.imagesToDelete.length} existing image{formData.imagesToDelete.length !== 1 ? 's' : ''} marked for deletion.</span>
            )}
          </div>
        </FormGroup>
      </IsolatedModal>
    </div>
  );
};

export default PressReleasePage;