import strawberryDrawing from "../resources/images/art/stillLife/strawberry.png"
import limeDrawing from "../resources/images/art/stillLife/lime.png"
import pepperDrawing from "../resources/images/art/stillLife/pepper.png"
import pomegranateDrawing from "../resources/images/art/stillLife/pomegranate.png"
import dragonTreeDrawing from "../resources/images/art/stillLife/dragonTree.png"
import plumDrawing from "../resources/images/art/stillLife/plum.png"

import owenProfile from "../resources/images/art/portraiture/owenOrange.png"
import blueNude from "../resources/images/art/lifeDrawing/blueLifeDrawing.png"
import goldNude from "../resources/images/art/lifeDrawing/goldenLifeDrawing.png"
import greenNude from "../resources/images/art/lifeDrawing/greenLifeDrawing.png"
import pencilSketchNude from "../resources/images/art/lifeDrawing/lifeDrawingPencil.png"
import selfPortrait from "../resources/images/art/portraiture/selfPortrait.png"

import blueSquirrel from "../resources/images/art/animals/blueSquirrel.png"
import tanithProfile from "../resources/images/art/animals/tanithProfile.png"
import tanithPortrait from "../resources/images/art/animals/tanithPortrait.png"
import bobPortrait from "../resources/images/art/animals/bobPortrait.png"
import jasperPortrait from "../resources/images/art/animals/jasperPortrait.png"
import honeyPencil from "../resources/images/art/animals/honeyPencil.png"

import foyleView from "../resources/images/art/paintings/killywoolFoyleView.png"
import churchPoint from "../resources/images/art/paintings/churchPoint.png"
import caledonianMacBrayne from "../resources/images/art/paintings/caledonianMacBrayne.png"
import honeyPortrait from "../resources/images/art/paintings/honeyPortrait.png"
import stemWatercolour from "../resources/images/art/watercolour/watercolourStems.png"
import gluggleJug from "../resources/images/art/paintings/gluggleJug.png"

const sections = [
    {
        header: "Still Life",
        images: [
            { id: 0, src: strawberryDrawing, title: "strawberryDrawing", alt: "Coloured Pencil Sketch of a Strawberry", styles: "wide"},
            { id: 1, src: limeDrawing, title: "limeDrawing", alt: "Coloured Pencil Sketch of a Lime" },
            { id: 2, src: pepperDrawing, title: "pepperDrawing", alt: "Coloured Pencil Sketch of a Red Pepper" },
            { id: 3, src: pomegranateDrawing, title: "pomegranateDrawing", alt: "Coloured Pencil Sketch of a Pomegranate", styles: "tall wide" },
            { id: 4, src: dragonTreeDrawing, title: "dragonTreeDrawing", alt: "Coloured Pencil Sketch of a potted Dragon Tree", styles: "tall" },
            { id: 5, src: plumDrawing, title: "plumDrawing", alt: "Coloured Pencil Sketch of a Plum", styles: "tall" }
        ]
    },
    {
        header: "Portraiture & Life Drawing",
        images: [
            { id: 6, src: owenProfile, title: "owenProfile", alt: "Orange pencil sketch of a man's side profile", styles: "tall wide" },
            { id: 7, src: blueNude, title: "blueNude", alt: "Blue life drawing of a man", styles: "tall" },
            { id: 8, src: goldNude, title: "goldNude", alt: "Gold life drawing of a man", styles: "wide" },
            { id: 9, src: greenNude, title: "greenNude", alt: "Green life drawing of a woman", styles: "tall" },
            { id: 10, src: pencilSketchNude, title: "pencilSketchNude", alt: "Pencil Sketch life drawing of a woman" },
            { id: 11, src: selfPortrait, title: "selfPortrait", alt: "Rough sketch self portrait in red"}
        ]
    },
    {
        header: "Animal Sketches",
        images: [
            { id: 12, src: blueSquirrel, title: "blueSquirrel", alt: "Blue pencil drawing of a squirrel", styles: "wide" },
            { id: 13, src: tanithProfile, title: "tanithProfile", alt: "Pencil drawing of a Siamese cat" },
            { id: 14, src: tanithPortrait, title: "tanithPortrait", alt: "Pencil drawing of a Siamese cat", styles: "wide" },
            { id: 15, src: bobPortrait, title: "bobPortrait", alt: "Pencil drawing of a ginger cat", styles: "tall wide" },
            { id: 16, src: jasperPortrait, title: "jasperPortrait", alt: "Pencil drawing of a white cat with ginger patches" },
            { id: 17, src: honeyPencil, title: "honeyPencil", alt: "Pencil drawing of a brown and white dog", styles: "tall"}
        ]
    },
    {
        header: "Paintings",
        images: [
            { id: 18, src: foyleView, title: "kiilywoolFoyleView", alt: "Oil painting of the view over the Foyle river", styles: "wide" },
            { id: 19, src: gluggleJug, title: "gluggleJug", alt: "Stylised watercolour of a blue Gluggle Jug", styles: "tall" },
            { id: 20, src: churchPoint, title: "churchPoint", alt: "Oil painting of the view of Castleward Bay at dusk", styles: "tall wide" },
            { id: 21, src: caledonianMacBrayne, title: "caledonianMacBrayne", alt: "Oil painting of the Ferry in Ullapool", styles: "wide" },
            { id: 22, src: honeyPortrait, title: "honeyPortrait", alt: "Oil painting of a dog on the beach", styles: "wide" },
            { id: 23, src: stemWatercolour, title: "stemWatercolour", alt: "Stylised watercolour of green stems" }
        ]
    }
]

export default sections;