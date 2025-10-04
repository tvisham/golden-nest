const Banner = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-rose-50 via-white to-amber-50 py-6">
      <div className="text-center">
        <h1 className="text-5xl  font-inter font-bold mb-4">
          <span
            className="bg-gradient-to-r text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FF6B6B 0%, #FFD93D 50%, #6BCB77 100%)",
            }}
          >
            Golden Nest — Retirement Wizard
          </span>
        </h1>
        <p className="text-lg font-medium text-gray-600 font-inter">
          Plan smart, save happy — know your future in a few clicks ✨
        </p>
      </div>
    </div>
  );
};

export default Banner;
