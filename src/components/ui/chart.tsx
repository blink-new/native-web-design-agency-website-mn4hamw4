import { FC } from "react";

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string | string[];
    borderWidth?: number;
    fill?: boolean;
    tension?: number;
  }[];
}

interface ChartProps {
  data: ChartData;
}

export const LineChart: FC<ChartProps> = ({ data }) => {
  return (
    <div className="h-full w-full">
      <div className="text-center text-xs text-gray-500 mb-2">
        This is a mockup visualization. The data shown is static and for demonstration purposes only.
      </div>
      <div className="h-full w-full relative">
        {/* X-axis labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4">
          {data.labels.map((label, index) => (
            <div key={index} className="text-xs text-gray-500">{label}</div>
          ))}
        </div>
        
        {/* Chart visualization */}
        <div className="h-[90%] w-full bg-gradient-to-b from-primary-100/30 to-transparent rounded-md p-4 flex items-end">
          {data.datasets[0].data.map((value, index) => {
            const normalizedHeight = (value / Math.max(...data.datasets[0].data)) * 100;
            return (
              <div 
                key={index} 
                className="flex-1 mx-1 relative group"
              >
                <div 
                  className="absolute bottom-0 w-full bg-primary-500 rounded-t-sm transition-all duration-500"
                  style={{ height: `${normalizedHeight}%` }}
                ></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const BarChart: FC<ChartProps> = ({ data }) => {
  return (
    <div className="h-full w-full">
      <div className="text-center text-xs text-gray-500 mb-2">
        This is a mockup visualization. The data shown is static and for demonstration purposes only.
      </div>
      <div className="h-full w-full relative">
        {/* Y-axis labels */}
        <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-between py-4">
          <div className="text-xs text-gray-500">100%</div>
          <div className="text-xs text-gray-500">75%</div>
          <div className="text-xs text-gray-500">50%</div>
          <div className="text-xs text-gray-500">25%</div>
          <div className="text-xs text-gray-500">0%</div>
        </div>
        
        {/* Chart visualization */}
        <div className="h-full ml-8 bg-gray-50 rounded-md p-4 flex items-end">
          {data.datasets[0].data.map((value, index) => {
            const normalizedHeight = (value / 100) * 100;
            return (
              <div 
                key={index} 
                className="flex-1 mx-1 relative group"
              >
                <div 
                  className="absolute bottom-0 w-full bg-primary-500 rounded-t-sm transition-all duration-500"
                  style={{ height: `${normalizedHeight}%` }}
                ></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {value}%
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 whitespace-nowrap">
                  {data.labels[index]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const DoughnutChart: FC<ChartProps> = ({ data }) => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="text-center text-xs text-gray-500 absolute top-2">
        This is a mockup visualization. The data shown is static and for demonstration purposes only.
      </div>
      <div className="relative w-48 h-48">
        <div className="absolute inset-0 rounded-full border-8 border-gray-100"></div>
        
        {/* Render pie segments */}
        {data.datasets[0].data.map((value, index) => {
          const colors = Array.isArray(data.datasets[0].backgroundColor) 
            ? data.datasets[0].backgroundColor 
            : ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];
          
          // This is a simplified visualization - in a real chart, we would calculate proper angles
          const offset = index * 20; // Just for visual separation in the mockup
          
          return (
            <div 
              key={index}
              className="absolute w-full h-full rounded-full overflow-hidden"
              style={{ 
                clipPath: `polygon(50% 50%, ${50 + offset}% 0%, ${90 + offset}% ${30 + (index * 5)}%)`,
                backgroundColor: colors[index % colors.length]
              }}
            ></div>
          );
        })}
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white rounded-full w-28 h-28"></div>
        </div>
      </div>
    </div>
  );
};

export const PieChart = DoughnutChart;