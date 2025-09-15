export const ImageOrListSlider = ({ selectedImageOrList, setSelectedImageOrList }) => {
    const isImageMode = selectedImageOrList === 'image';

    const handleToggle = () => {
        setSelectedImageOrList(isImageMode ? 'list' : 'image');
    };

    const getButtonClasses = () => {
        return (isImageMode ? 'button-active' : 'button-inactive')
    };

    const getThumbClasses = () => {
        return (isImageMode ? 'thumb-right' : 'thumb-left')
    };

    const getLabelClasses = () => {
        return (isImageMode ? 'label-active' : 'label-inactive')
    };

    return (
        <div className={'image-or-list-slider'}>
            <button
                onClick={handleToggle}
                className={'button-base ' + getButtonClasses()}
                role="switch"
                aria-checked={isImageMode}
            >
                <span className={'thumb-base ' + getThumbClasses()} />
            </button>
            <span className={'label-base ' + getLabelClasses()}>
                Image View
            </span>
        </div>
    );
};