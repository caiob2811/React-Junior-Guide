import "./Ex12"

export default function TaskItem ({title, completed}) {
    
    return (
       <div style={{ marginBottom: "1rem" }}>
        <span>[{completed ? "✅" : "❌"}] - </span>
        <span>{title}</span>
       </div>
    )
}