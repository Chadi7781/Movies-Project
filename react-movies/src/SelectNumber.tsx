export default function SelectNumber(props: selectNumberProps ) {
    const array = Array(props.maxValue).fill(0);

    return (
        <select onChange={(e) => {
            console.log(e.currentTarget.value);
            props.onSelected(parseInt(e.currentTarget.value,10));

        }}>
            {array.map((_,index) => 
                <option value={index+1} key={index+1}>props.selectContent(index+1)</option>)}
        </select>    

    )
}





interface selectNumberProps{
    maxValue: number;

    onSelected(value: number): void;
    selectContent(value: number): React.ReactNode;
}

SelectNumber.defaultProps ={

    maxValue: 5
}