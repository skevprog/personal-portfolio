const personalName = 'Kevin Soruco';

//TODO: animate with => hover:animate-wiggle

const PersonalCard = () => {
  return (
    <div className=" border-solid border-2 w-4/6 border-red-500 p-2 mx-auto">
      <div className="mt-24 text-center mx-auto">
        <div>
          <div className="inline-block border-t-2 border-slate-950 w-auto">
            <h2 className="text-5xl text-center">{personalName}</h2>
          </div>
          <p className="text-slate-600	">Software Developer</p>
        </div>
        <img
          src="src/assets/img/testProfilePicEdited.png"
          height={350}
          width={350}
          alt="profile-pic"
          className="mt-14 mx-auto"
        />
      </div>
    </div>
  );
};

export default PersonalCard;
