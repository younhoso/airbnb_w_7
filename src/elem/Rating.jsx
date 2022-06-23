import Star from './Star';

const RATINGS = [1, 2, 3, 4, 5];

function Rating({ className, value = 0, onSelect }) {
  return (
    <span className={className}>
      {RATINGS.map((rating) => (
        <Star
          key={rating}
          selected={value >= rating}
          rating={rating}
          onSelect={onSelect}
        />
      ))}
    </span>
  );
}

export default Rating;
