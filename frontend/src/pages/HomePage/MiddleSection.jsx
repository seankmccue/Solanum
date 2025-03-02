import './MiddleSection.css'
import ResourcesTab from '../../components/Homepage/ResoucesTab';
import TutorialsTab from '../../components/Homepage/TutorialsTab';
import LocateTab from '../../components/Homepage/LocateTab';

function MiddleSection() {
    return (
        <>
        <div className="middle-section">
            <h3>“The love of gardening is a seed once sown that never dies”</h3>
            <ResourcesTab/>
            <TutorialsTab/>
            <LocateTab/>
        </div>
        
        </>
    )
}

export default MiddleSection;