import { useNavigate } from 'react-router-dom';

export default function ListItemContainer({thumbnailUrl, lookbookName, images}) {
    const displayName = lookbookName.replace(/-/g, ' ');
    const navigate = useNavigate();

    const handleClick = () => {
        // Encode images as URL parameter and open in new tab
        const imagesParam = encodeURIComponent(JSON.stringify(images));
        window.open(`/lookbook/${lookbookName}?images=${imagesParam}`, '_blank');
    };

    return (
        <div className={'list-item-container'} onClick={handleClick} style={{cursor: 'pointer'}}>
            <img className={'list-item-thumbnail'} src={thumbnailUrl} alt={lookbookName}/>
            <div className={'list-item-content'}>
                <h3 className={'list-item-title'}>{displayName}</h3>
            </div>
        </div>
    );
}