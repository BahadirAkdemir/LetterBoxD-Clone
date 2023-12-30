import "primeicons/primeicons.css";

const HeroContent = () => {
  return (
    <div className="hero-text-content">
      <h2>
        Track films you’ve watched.
        <br />
        Save those you want to see.
        <br />
        Tell your friends what’s good.
      </h2>
      <a className="get-started-btn" href="">
        GET STARTED - IT'S FREE
      </a>
      <div className="flex justify-center items-center mb-32 gap-2">
        <p>The social network for film lovers. Also available on</p>
        <a href="" className="pi pi-apple"></a>
        <a href="" className="pi pi-android"></a>
      </div>
    </div>
  );
};

export default HeroContent;
