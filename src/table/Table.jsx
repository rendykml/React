import Row from "./Row";

export default function Table({rows}) {
    return (
        <table border= "1">
            <tbody>
                <Row id="1" text="satu"/>
                <Row id="2" text="dua"/>   
                <Row id="3" text="tiga"/>
                <Row id="4" text="empat"/>
            </tbody>
        </table>
    );
}