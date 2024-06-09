const CURRNCY_FORMATTER=new Intl.NumberFormat(undefined,{
    currency:"USD",
    style:"currency"
})

const formatcurrency=(number)=>{
    return CURRNCY_FORMATTER.format(number)
}
export default formatcurrency;