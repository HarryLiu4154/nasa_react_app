export default function SideBar(props) {

    const { handleToggleModal } = props

    return (
        <div className="sidebar">
            <div className="bgOverlay" onClick={handleToggleModal}></div>
            <div className="sidebarContent">
                <h2>Martian Landscape</h2>
                <div>
                    <p>Description</p>
                    <p>Placeholder text about topic</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}