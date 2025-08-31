const Card = () => {
  return (
    <div className="py-6 card-size-mobile bg-white">
      <div className="bg-white rounded-full flex items-center justify-center">
        <img src="image-victor.jpg" alt="image victor" className="rounded-full border-4 border-white h-24 w-24" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="">Victor Crest 26</div> 
        <div className="">London</div>
      </div>
      <div className="flex flex-nowrap items-center justify-between pt-[25px] px-[37px] mt-6">
        <div className="social-card">
          <p>80K</p> <p>Followers</p>
        </div>
        <div className="social-card">
          <p>803K</p> <p>Likes</p>
        </div>
        <div className="social-card">
          <p>1.4K</p> <p>Photos</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
