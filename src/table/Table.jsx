import Row from "./Row";

export default function Table({rows}) {
    return (
        <table border= "1">
            <tbody>
                <Row text="satu"/>
                <Row text="dua"/>   
                <Row text="tiga"/>
            </tbody>
        </table>
    );
}