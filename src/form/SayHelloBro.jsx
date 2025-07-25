export default function SayHelloBro() {
    function handleClick(e) {
        e.preventDefault();
        const name = document.getElementById("input_name").value;
        document.getElementById("text_hello").innerText = `Hello ${name}`;
    }
    return (
        <div>
            <input id="input_name" />
            <button onClick={handleClick} style={{ backgroundColor: "blue" }}>
                Say Hello
            </button>
            <h1 id="text_hello">Hello World</h1>
        </div>
    );
}