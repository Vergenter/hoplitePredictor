/**
 * 
 * @type {Array<string>}
 */
const EMPTY_IMG = "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
const ASSETS = ["assets/ground.png","assets/player.png","assets/spear.png","assets/stairs.png","assets/magma.png","assets/altar_on.png","assets/fleece.png","assets/portal.png","assets/demolitionist_without_bomb_I.png","assets/demolitionist_without_bomb_II.png","assets/demolitionist_holding_bomb.png","assets/bomb.png","assets/archer.png","assets/wizard_discharged.png","assets/wizard_charged.png","assets/footman.png"]
const IDICES_OUTSIDE_OF_MAP = [1,2,10,11,3,4,6,7,8,9,17,18,82,92,93,91,97,98,90,99].map(x=>x-1)
const mapStates = Array.from({length: 99}, (_,i) => IDICES_OUTSIDE_OF_MAP.includes(i)?EMPTY_IMG:ASSETS[0])
/**
 * @param {HTMLImageElement} img
 */
function changeImage(img){
    const index = parseInt(img.id.split("_")[1])-1
    if (IDICES_OUTSIDE_OF_MAP.includes(index)) return
    mapStates[index] =  ASSETS[(ASSETS.indexOf(mapStates[index])+1)%ASSETS.length]
    img.src = mapStates[index]
}