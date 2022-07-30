
const EMPTY_IMG = "data:,"
const ASSETS = ["assets/ground.png","assets/player_moved.png","assets/magma.png","assets/altar_on.png","assets/footman.png","assets/archer.png","assets/wizard_discharged.png","assets/wizard_charged.png","assets/demolitionist_without_bomb_I.png","assets/demolitionist_without_bomb_II.png","assets/demolitionist_holding_bomb.png","assets/bomb.png","assets/fleece.png","assets/portal.png","assets/spear.png","assets/stairs.png"]
const LIMITED_COUNT_ASSETS = ["assets/player_moved.png","assets/spear.png","assets/stairs.png","assets/altar_on.png","assets/fleece.png","assets/portal.png"]
/**
 * 
 * @type {Array<string>}
 */
const limited_count_assets_taken = ["assets/stairs.png"]
const IDICES_OUTSIDE_OF_MAP = [1,2,10,11,3,4,6,7,8,9,17,18,82,92,93,91,97,98,90,99].map(x=>x-1)
const mapStates = Array.from({length: 99}, (_,i) => IDICES_OUTSIDE_OF_MAP.includes(i)?EMPTY_IMG:ASSETS[0])
mapStates[13]="assets/stairs.png"
/**
 * @param {string} currentAssetPath
 * @returns {string}
 */
function getNextAsset(currentAssetPath){
    if (ASSETS.indexOf(currentAssetPath) ===-1) throw "currentAssetPath is not know asset path!"
    const indexOfCurrentAsset = limited_count_assets_taken.indexOf(currentAssetPath)
    if (indexOfCurrentAsset!==-1){
        limited_count_assets_taken.splice(indexOfCurrentAsset,1)
    }
    let next = currentAssetPath
    do{
        next = ASSETS[(ASSETS.indexOf(next)+1)%ASSETS.length]
    } while(limited_count_assets_taken.indexOf(next)!==-1)

    if (LIMITED_COUNT_ASSETS.indexOf(next)!==-1){
        limited_count_assets_taken.push(next)
    }
    return next
}

/**
 * @param {HTMLImageElement} img
 */
function changeImage(img){
    const index = parseInt(img.id.split("_")[1])-1
    if (IDICES_OUTSIDE_OF_MAP.includes(index)) return
    mapStates[index] =  getNextAsset(mapStates[index])
    img.src = mapStates[index]
}
/**
 * @param {HTMLButtonElement} button
 */
function changeToAnalyticView(button){
    const el = document.createElement('connection-x');
    el.setAttribute('id', 'my-id');
    el.setAttribute('from', '#hex_1');
    el.setAttribute('to', '#hex_2');
    el.setAttribute('color', 'red');
    el.setAttribute('tail', '');
    document.body.appendChild(el)

}