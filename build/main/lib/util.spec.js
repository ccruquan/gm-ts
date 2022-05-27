"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const util_1 = require("./util");
(0, ava_1.default)('util computeZDigest ', (t) => {
    const data = 'from=0x6469643a6870633a526564436176653a63613764633364383330316431343764323731373263396334643764643163623431643735363063&to=0x6469643a6870633a526564436176653a63613764633364383330316431343764323731373263396334643764643163623431643735363063&value=0x0&payload=0x7b2264696441646472657373223a226469643a6870633a526564436176653a63613764633364383330316431343764323731373263396334643764643163623431643735363063222c227374617465223a302c227075626c69634b6579223a7b2274797065223a22736d32222c226b6579223a2242412b54647770364376516f77386d536a77636375465a5670747864326c63764c356c4f363832505348445353447573736e707a3841784e746a433273545949484c6c624a5979683651686955515357375559446b326f3d227d7d&timestamp=0x16f2496da73d66b5&nonce=0xd7af9ffc0cd8b&opcode=c8&extra=&vmtype=TRANSFER&version=3.2&extraid=&cname=';
    const pubKey = '040f93770a7a0af428c3c9928f071cb85655a6dc5dda572f2f994eebcd8f4870d2483bacb27a73f00c4db630b6b136081cb95b258ca1e90862510496ed4603936a';
    const r = (0, util_1.computeZDigest)(data, pubKey, {
        dataEncoding: 'utf8',
        keyEncoding: 'hex',
        hashEncoding: 'hex',
    });
    console.log('result --------------> ', r);
    t.log('result--->', r);
});
(0, ava_1.default)('util Z', (t) => {
    const pubKey = '040f93770a7a0af428c3c9928f071cb85655a6dc5dda572f2f994eebcd8f4870d2483bacb27a73f00c4db630b6b136081cb95b258ca1e90862510496ed4603936a';
    const z = (0, util_1.Z)(pubKey, { keyEncoding: 'hex', hashEncoding: 'hex' });
    t.log('z: ', z);
    t.assert(z === '67871e6796a96fc7550c426dec248debe2aee0b1841a6de13ff3df03ce1168e8');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi91dGlsLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4Q0FBdUI7QUFFdkIsaUNBQTJDO0FBRTNDLElBQUEsYUFBSSxFQUFDLHNCQUFzQixFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDakMsTUFBTSxJQUFJLEdBQ1Isa3hCQUFreEIsQ0FBQztJQUNyeEIsTUFBTSxNQUFNLEdBQ1Ysb0lBQW9JLENBQUM7SUFDdkksTUFBTSxDQUFDLEdBQUcsSUFBQSxxQkFBYyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUU7UUFDckMsWUFBWSxFQUFFLE1BQU07UUFDcEIsV0FBVyxFQUFFLEtBQUs7UUFDbEIsWUFBWSxFQUFFLEtBQUs7S0FDcEIsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6QixDQUFDLENBQUMsQ0FBQztBQUVILElBQUEsYUFBSSxFQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ25CLE1BQU0sTUFBTSxHQUNWLG9JQUFvSSxDQUFDO0lBQ3ZJLE1BQU0sQ0FBQyxHQUFHLElBQUEsUUFBQyxFQUFDLE1BQU0sRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxDQUFDLE1BQU0sQ0FDTixDQUFDLEtBQUssa0VBQWtFLENBQ3pFLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyJ9