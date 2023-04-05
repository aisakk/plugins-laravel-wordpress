type Rating = {
    name: string;
    count: number;
    percentage: number;
};

type PercentageProps = {
    rating: Rating;
};

const Percentage: React.FC<PercentageProps> = ({ rating }) => {
    return (
        <div className="flex items-center mt-4">
            <span className="w-12 text-sm font-medium">{ rating.name }</span>
            <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded-xl dark:bg-gray-700">
                <div className={`
                    h-5 bg-yellow-400 rounded-xl
                `} style={{ width: rating.percentage + '%' }}></div>
            </div>
            <span className="text-sm font-medium">{ rating.count }</span>
        </div>
    )
  }

  export default Percentage;
