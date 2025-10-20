import Masonry from "react-masonry-css";
import { FaHeart, FaComment } from "react-icons/fa";

const UserPosts = () => {
  const images = [
    { src: "/img10.jpg", likes: 120, comments: 45 },
    { src: "/img2.jpg", likes: 86, comments: 20 },
    { src: "/img3.jpg", likes: 233, comments: 65 },
    { src: "/img4.jpg", likes: 99, comments: 15 },
    { src: "/img5.jpg", likes: 150, comments: 34 },
    { src: "/img6.jpg", likes: 300, comments: 80 },
    { src: "/img7.jpg", likes: 210, comments: 47 },
    { src: "/img8.jpg", likes: 130, comments: 25 },
    // { src: "/img10.jpg", likes: 10, comments: 5 },
  ];

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="border border-gray-800 p-4 rounded-sm bg-transparent">
      <h2 className="text-[25px] font-semibold mb-4 text-gray-400 uppercase">Your Posts</h2>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-3"
        columnClassName="space-y-3"
      >
        {images.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg cursor-pointer"
          >
            {/* Image */}
            <img
              src={item.src}
              alt={`Post ${index + 1}`}
              className="w-full rounded-lg transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
              {/* Likes */}
              <div className="flex items-center gap-2 text-white text-lg font-semibold">
                <FaHeart className="text-red-500" />
                <span>{item.likes}</span>
              </div>

              {/* Comments */}
              <div className="flex items-center gap-2 text-white text-lg font-semibold">
                <FaComment className="text-gray-200" />
                <span>{item.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default UserPosts;
