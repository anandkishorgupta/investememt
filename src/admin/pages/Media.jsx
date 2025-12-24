import { MoreVertical } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
// const API_URL_UPLOADS = import.meta.env.VITE_API_UPLOADS ;
const API_URL = import.meta.env.VITE_API_URL ;

const MediaPage = () => {
  const [mediaFiles, setMediaFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewModal, setViewModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);
  const pageRef = useRef(null);

  // Fetch media from backend
  const fetchMedia = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/media`);
      const data = await response.json();
      // Flatten the media documents to get individual images
      const allImages = data.flatMap(media =>
        media.images.map((url, index) => ({
          _id: `${media._id}-${index}`,
          mediaId: media._id,
          imageIndex: index,
          name: url.split('/').pop(),
          url: url.startsWith('http') ? url : `${API_URL}${url}`,
          
          uploadDate: new Date(media.createdAt).toLocaleDateString(),
          createdAt: media.createdAt
        }))
      );
      setMediaFiles(allImages);
    } catch (error) {
      console.error('Error fetching media:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  // Handle closing dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pageRef.current && !pageRef.current.contains(event.target)) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDelete = async (file) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      try {
        // Use the mediaId and imageIndex from the file object
        const response = await fetch(`${API_URL}/api/media/${file.mediaId}/image/${file.imageIndex}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          // Remove the specific image from the state
          setMediaFiles(mediaFiles.filter(f => f._id !== file._id));
        } else {
          const errorData = await response.json();
          alert(`Failed to delete image: ${errorData.message}`);
        }
      } catch (error) {
        console.error('Error deleting image:', error);
        alert('Failed to delete image');
      }
    }
  };

  const handleFileUpload = async (event) => {
    const files = Array.from(event.target.files);
    if (files.length === 0) return;

    const formData = new FormData();
    files.forEach(file => {
      formData.append('images', file);
    });

    try {
      const response = await fetch(`${API_URL}/api/media`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        await fetchMedia(); // Refresh the media list
      } else {
        alert('Failed to upload images');
      }
    } catch (error) {
      console.error('Error uploading files:', error);
      alert('Failed to upload images');
    }
  };

  const handleView = (file) => {
    setSelectedImage(file);
    setViewModal(true);
  };

  return (
    <div ref={pageRef} className="fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Media Gallery</h1>
          <p className="text-gray-600 mt-1">Manage your media files and images</p>
        </div>
        <Button
          variant="primary"
          className="flex items-center space-x-2"
          onClick={() => document.getElementById('media-upload-input').click()}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <span>Upload Media</span>
        </Button>
        <input
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          onChange={handleFileUpload}
          id="media-upload-input"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Images</p>
              <p className="text-3xl font-bold">{mediaFiles.length}</p>
            </div>
            <svg className="w-12 h-12 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="p-8 text-center bg-white rounded-lg">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-2 text-gray-600">Loading media...</p>
        </div>
      )}

      {/* Media Grid */}
      {!loading && (
        <div className="image-grid">
          {mediaFiles.map((file) => (
            <div key={file._id} className="image-card bg-white">
            <div className="relative group">
              <img
                src={file.url}
                alt={file.name}
                className="cursor-pointer w-full h-48 object-cover"
                onClick={() => {
                  // Close any open menu when viewing image
                  setOpenMenuId(null);
                  handleView(file);
                }}
              />
              <div className="absolute top-2 right-2">
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenMenuId(openMenuId === file._id ? null : file._id);
                    }}
                    className="p-1 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all duration-200"
                  >
                    <MoreVertical size={18} />
                  </button>

                  {openMenuId === file._id && (
                    <div className="absolute right-0 mt-1 w-28 bg-white border rounded-md shadow-lg z-20">
                      <button
                        onClick={() => {
                          setOpenMenuId(null);
                          handleView(file);
                        }}
                        className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
                      >
                        View
                      </button>
                      <button
                        onClick={() => {
                          setOpenMenuId(null);
                          handleDelete(file);
                        }}
                        className="block w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm font-semibold text-gray-800 truncate">{file.name}</p>
              <p className="text-xs text-gray-500 mt-1">{file.uploadDate}</p>
            </div>
          </div>
        ))}
        </div>
      )}

      {!loading && mediaFiles.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="mt-2 text-gray-600">No media files uploaded yet</p>
        </div>
      )}

      {/* View Modal */}
      {selectedImage && (
        <Modal
          isOpen={viewModal}
          onClose={() => setViewModal(false)}
          title="Image Preview"
          size="lg"
        >
          <div className="space-y-4">
            <img src={selectedImage.url} alt={selectedImage.name} className="w-full rounded-lg" />
            <div>
              <p className="text-sm text-gray-600"><strong>Name:</strong> {selectedImage.name}</p>
              <p className="text-sm text-gray-600 mt-1"><strong>Upload Date:</strong> {selectedImage.uploadDate}</p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default MediaPage;