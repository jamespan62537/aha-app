const ResultCard = ({ name, username, avatar }) => (
  <div className="w-full">
    <div className="mb-3 flex h-[146px] w-full items-end rounded-[10px] bg-black-800 px-2 py-3">
      <img src={avatar} alt="avatar" />
    </div>
    <p className="mb-1 line-clamp-1 text-sm">{name}</p>
    <p className="text-xs">{username}</p>
  </div>
);

export default ResultCard;
