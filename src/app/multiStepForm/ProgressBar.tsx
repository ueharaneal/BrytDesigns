




export default function ProgressBar({currentStep}: {currentStep: number}) {
    
    return (
        <div className="flex flex-row gap-x-3 items-center">
          <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
            <ProgressBarCode stepNumber={1} isPast={currentStep >= 1} isActive={currentStep ==0}/>
          </div>
          <div className={`w-11 ${currentStep >= 1 ? "border-pop" :"border-accent"} border-2 h-1`}></div>
          <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
            <ProgressBarCode stepNumber={2} isPast={currentStep >= 2} isActive={currentStep ==1}/>
          </div>
          <div className={`w-11 ${currentStep >= 2 ? "border-pop" :"border-accent"} border-2 h-1`}></div>
          <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
            <ProgressBarCode stepNumber={3} isPast={currentStep >= 3} isActive={currentStep ==2}/>
          </div>
        </div>
      );
    }

function ProgressBarCode({stepNumber, isPast, isActive}: {stepNumber: number, isPast?: boolean, isActive?: boolean}) {
  return (
    <div className={`${isActive ? "border-pop" : "border-black"} border-2 rounded-full h-10 w-10 ${isPast ? 'bg-pop' : ''}`}>
        <div className={`flex justify-center items-center text-xl text-center h-full w-full ${isActive ? "text-violet-700" : "text-black"}`}>
            {stepNumber}
        </div>
    </div>
  );
}   