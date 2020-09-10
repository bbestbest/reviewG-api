module.exports = async function AdminOverAllScore(data) {
    if(typeof data !== 'object') throw new Error()

    const {story , gameplay , performance , graphic} = data

    const overAllScore = data

    // const rules = {
    //     story: 'required'|'number',
    //     gameplay : 'required'|'number',
    //     performance : 'required'|'number',
    //     graphic : 'required'|'number'
    // }
}