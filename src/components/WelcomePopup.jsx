import { IoClose } from "react-icons/io5";

const WelcomePopup = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60">
      <div className="relative bg-white rounded-xl max-w-lg w-full overflow-hidden">

        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-white p-2 rounded-full"
        >
          <IoClose size={22} />
        </button>

        <img src={imageUrl} alt="Popup" className="w-full" />
      </div>
    </div>
  );
};

export default WelcomePopup;
