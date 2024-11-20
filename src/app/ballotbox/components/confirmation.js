function Confirm({ selectedVote, handleVoteClick, hasVoted }) {
  return (
    <div className="flex items-center justify-center">
      <button
        className={`py-2 rounded-full  ${
          selectedVote ? "bg-green-500 border border-green-500" : "border"
        } text-black`}
        onClick={handleVoteClick}
        disabled={hasVoted}
      >
        <span
          className={`px-4 py-2 rounded-full ${
            hasVoted
              ? "bg-green-500 px-8 py-3 border-0 text-white"
              : "bg-transparent text-white"
          }`}
        >
          {hasVoted ? "Voted" : "Cast Vote"}
        </span>
      </button>
    </div>
  );
}

export default Confirm;
