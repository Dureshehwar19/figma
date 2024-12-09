// Assuming i am rendering list of items in Latest.tsx
interface Item {
  id: string | number; // Use id types that make sense for your data
  title: React.ReactNode; // Ensures valid ReactNode types
  description: React.ReactNode; // Ensures valid ReactNode types
}

interface LatestProps {
  items: Item[]; // Array of items with a well-defined structure
}

const Latest: React.FC<LatestProps> = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={item.id || index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Latest;

  