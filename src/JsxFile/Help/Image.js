const Images = [
    "https://res.cloudinary.com/denrzaquu/image/upload/v1770065372/F365449E-27D7-43EC-B950-C93973E0C14F_bhjekh.png",
    "https://res.cloudinary.com/denrzaquu/image/upload/v1770065372/khamkeo-OcxlTBbb6SY-unsplash_ktaobs.jpg",
    "https://res.cloudinary.com/denrzaquu/image/upload/v1770065372/F357C563-F517-4ACD-A79F-F1570C07B05F_soqlzb.png",
    "https://res.cloudinary.com/denrzaquu/image/upload/v1770065373/oziel-gomez-L8-0SAy-aoQ-unsplash_nvdu3o.jpg",
    "https://res.cloudinary.com/denrzaquu/image/upload/v1770065374/697F6AEB-EADC-4A31-B1BD-9FE86BA9EB1F_urycb6.png",
    "https://res.cloudinary.com/denrzaquu/image/upload/v1770065374/8BC50F79-6F70-49A2-AB28-7123A9AC845B_o04lbq.png",
    "https://res.cloudinary.com/denrzaquu/image/upload/v1770065374/0E85F3F7-265D-4A30-9E4B-5AE5E31A38BD_ikwxqh.png",
    "https://res.cloudinary.com/denrzaquu/image/upload/v1770065374/6F704D02-0CCB-4A51-B3D6-5E2E3ED3C8A4_s22kj1.png",
    "https://res.cloudinary.com/denrzaquu/image/upload/v1770065376/52222F5A-254E-49EA-9603-C74FB5CCC606_irxspx.png",
    "https://res.cloudinary.com/denrzaquu/image/upload/v1770065375/nathan-dumlao-w5hhoYM_JsU-unsplash_rpu62k.jpg",
    "https://res.cloudinary.com/denrzaquu/image/upload/v1770065375/512EBBE1-27EF-4915-B433-125252561423_rbbcoj.png",
    "https://res.cloudinary.com/denrzaquu/image/upload/v1770065376/FD5892F9-8439-4373-B93F-00795CC821A1_abuw1k.png",
    "https://res.cloudinary.com/denrzaquu/image/upload/v1770065376/53ADC135-8405-4AC7-9C88-A17D86CEDF07_lpaytc.png",
    "https://res.cloudinary.com/denrzaquu/image/upload/v1770065379/alvin-mahmudov-VUMdDPNxTsg-unsplash_qdhw9x.jpg",
];

export default function getProfile(){
    return Images[Math.floor(Math.random() * Images.length)]
}