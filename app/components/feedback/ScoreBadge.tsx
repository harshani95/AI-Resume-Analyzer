const ScoreBadge = ({ score }: { score: number }) => {
  let badgeColor = "";
  let badgeText = "";

  if (score >= 75) {
    badgeColor = "bg-badge-green text-green-800";
    badgeText = "Excellent";
  } else if (score >= 50) {
    badgeColor = "bg-badge-yellow text-yellow-800";
    badgeText = "Good Start";
  } else {
    badgeColor = "bg-badge-red text-red-800";
    badgeText = "Needs Improvement";
  }
  return (
    <div className={`px-3 py-1 rounded-full ${badgeColor}`}>
      <p className="text-sm font-medium">{badgeText}</p>
    </div>
  );
};

export default ScoreBadge;
