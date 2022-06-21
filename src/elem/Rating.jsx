import Star from './Star';

const RATINGS = [1, 2, 3, 4, 5];

function Rating({ className, value = 0, onSelect }) {
  return (
    <div className={className}>
      {RATINGS.map((rating) => (
        <Star
          key={rating}
          selected={value >= rating}
          rating={rating}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default Rating;
