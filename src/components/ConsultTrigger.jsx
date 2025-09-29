const DetailsTrigger = ({ label, onClick }) => {
  return (
      <a
        href="#consult-details"
				className="consult-link"
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        {label}
      </a>
  );
};

export default DetailsTrigger;
