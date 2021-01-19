import './btnCard.css';

export default function btnCard(props) {
    return (
        <div className="btn-card">
            <p className="btn-texto">{props.title}</p>
        </div>
    );
}