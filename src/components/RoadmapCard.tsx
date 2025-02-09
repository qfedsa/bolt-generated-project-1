interface RoadmapCardProps {
  title: string;
  status: 'Priorität' | 'in Entwicklung' | 'geplant';
  description: string;
}

export function RoadmapCard({ title, status, description }: RoadmapCardProps) {
  const getStatusColor = () => {
    switch (status) {
      case 'Priorität':
        return 'bg-purple-100 text-purple-800';
      case 'in Entwicklung':
        return 'bg-yellow-100 text-yellow-800';
      case 'geplant':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor()}`}>
          {status}
        </span>
      </div>
      {description && (
        <p className="text-gray-600 text-sm">{description}</p>
      )}
    </div>
  );
}
