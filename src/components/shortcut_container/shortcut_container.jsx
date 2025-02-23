import './shortcut_container.css'

export default function ShortcutContainer({ action, shortcut }) {

    return (
        <div className="shortcut-main">
            <h4 style={{ padding: '0', margin: '0' }}>{action}</h4>
            <p>{shortcut}</p>
        </div>
    )
}