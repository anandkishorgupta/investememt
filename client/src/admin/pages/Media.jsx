import { MoreVertical } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';

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
      const token = localStorage.getItem('adminToken');
      const response = await fetch('https://backend-website-7ynm.onrender.com/api/media', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      // Flatten the media documents to get individual images
      const allImages = data.flatMap(media =>
        media.images.map((url, index) => ({
          _id: `${media._id}-${index}`,
          mediaId: media._id,
          imageIndex: index,
          name: url.split('/').pop(),
          url: url.startsWith('http') ? url : `https://backend-website-7ynm.onrender.com${url}`,
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
        const token = localStorage.getItem('adminToken');
        // Use the mediaId and imageIndex from the file object
        const response = await fetch(`https://backend-website-7ynm.onrender.com/api/media/${file.mediaId}/image/${file.imageIndex}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
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

    const token = localStorage.getItem('adminToken');
    
    // First, get existing media documents
    let mediaDocument = null;
    try {
      const mediaResponse = await fetch('https://backend-website-7ynm.onrender.com/api/media', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const mediaData = await mediaResponse.json();
      
      if (mediaData && mediaData.length > 0) {
        // Use the first existing media document
        mediaDocument = mediaData[0];
      }
    } catch (error) {
      console.error('Error getting media documents:', error);
      alert(`Failed to get media documents: ${error.message}`);
      return;
    }

    // If no media document exists, create one with the first batch of images (up to 6)
    if (!mediaDocument) {
      const createFormData = new FormData();
      
      // Add up to 6 images to create the initial media document
      const initialImagesCount = Math.min(6, files.length);
      for (let i = 0; i < initialImagesCount; i++) {
        createFormData.append('images', files[i]);
      }
      
      try {
        const createResponse = await fetch('https://backend-website-7ynm.onrender.com/api/media', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          },
          body: createFormData,
        });
        
        if (!createResponse.ok) {
          const errorData = await createResponse.json();
          console.error('Failed to create media document:', errorData);
          alert(`Failed to create media document: ${errorData.message || 'Unknown error'}`);
          return; // Stop if we can't create the initial document
        }
        
        const result = await createResponse.json();
        mediaDocument = result.data;
        
        // Update files array to remove the ones we already uploaded
        files.splice(0, initialImagesCount);
      } catch (error) {
        console.error('Error creating media document:', error);
        alert(`Failed to create media document: ${error.message}`);
        return; // Stop if we can't create the initial document
      }
    }
    
    // Now upload any remaining files one by one to maintain FIFO order
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await fetch(`https://backend-website-7ynm.onrender.com/api/media/${mediaDocument._id}/image`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          },
          body: formData,
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error(`Failed to upload image ${i + 1}:`, errorData);
          alert(`Failed to upload image: ${errorData.message || 'Unknown error'}`);
          continue; // Continue with next image even if one fails
        }
      } catch (error) {
        console.error(`Error uploading image ${i + 1}:`, error);
        alert(`Failed to upload image ${i + 1}: ${error.message}`);
        continue; // Continue with next image even if one fails
      }
    }

    // Refresh the media list after all uploads
    await fetchMedia();
  };

  const handleView = (file) => {
    setSelectedImage(file);
    setViewModal(true);
  };

  return (
    <div ref={pageRef} className="fade-in ">
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
                    <div className="absolute right-0 mt-1 w-28 bg-white border rounded-md shadow-lg z-20 overflow-hidden">
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
{/* //setSelectedImage */}

      {/* View Modal */}
      {selectedImage && (
//         <>
//         <div className='border absolute h-screen w-full top-0 left-0 fixed' >
//   <div className='relative h-full w-full'>
//       <div className='absolute h-full w-full bg-black opacity-50' >dasvd</div>
//        <div className='absolute h-full w-full border border-red-500 p-10' onClick={()=>{setSelectedImage(null)}}>
        
//         <img src={selectedImage.url} alt={selectedImage.name} className="w-full h-full object-cover" />
//        </div>
//   </div>
// </div>
        
//         </>
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