let StartButton = document.getElementById("StartButton");
let BagButton = document.getElementById("BagButton");
let StoreButton = document.getElementById("StoreButton");
let BakeryButton = document.getElementById("BakeryButton");
let BookingButton = document.getElementById("BookingButton");

let BagSection = document.getElementById("BagSection");
let StoreSection = document.getElementById("StoreSection");
let BakerySection = document.getElementById("BakerySection");
let GameSection = document.getElementById("GameSection");
let BookingSection = document.getElementById("BookingSection");

let GuestName = document.getElementById("GuestName");
let PhoneNumber = document.getElementById("PhoneNumber");
let CheckInDate = document.getElementById("CheckInDate");
let CheckOutDate = document.getElementById("CheckOutDate");
let GuestCount = document.getElementById("GuestCount");
let PetOption = document.getElementById("PetOption");
let ExtraNote = document.getElementById("ExtraNote");

let GenerateMessageButton = document.getElementById("GenerateMessageButton");
let CopyMessageButton = document.getElementById("CopyMessageButton");
let BookingMessage = document.getElementById("BookingMessage");
let CopyStatus = document.getElementById("CopyStatus");

function HideAllSections() {
    BagSection.classList.add("hidden");
    StoreSection.classList.add("hidden");
    BakerySection.classList.add("hidden");
    GameSection.classList.add("hidden");
    BookingSection.classList.add("hidden");
}

function ShowSection(section) {
    HideAllSections();
    section.classList.remove("hidden");

    section.scrollIntoView({
        behavior: "smooth"
    });
}

StartButton.onclick = function() {
    ShowSection(GameSection);
};

BagButton.onclick = function() {
    ShowSection(BagSection);
};

StoreButton.onclick = function() {
    ShowSection(StoreSection);
};

BakeryButton.onclick = function() {
    ShowSection(BakerySection);
};

BookingButton.onclick = function() {
    ShowSection(BookingSection);
};

GenerateMessageButton.onclick = function() {
    let name = GuestName.value;
    let phone = PhoneNumber.value;
    let checkIn = CheckInDate.value;
    let checkOut = CheckOutDate.value;
    let guestCount = GuestCount.value;
    let pet = PetOption.value;
    let note = ExtraNote.value;

    if (name === "" || phone === "" || checkIn === "" || checkOut === "") {
        BookingMessage.value = "请先填写姓名、联系电话、入住日期和退房日期。";
        CopyStatus.textContent = "";
        return;
    }

    if (checkOut <= checkIn) {
        BookingMessage.value = "退房日期需要晚于入住日期，请重新选择。";
        CopyStatus.textContent = "";
        return;
    }

    if (note === "") {
        note = "想确认所选日期是否可以预订。";
    }

    let message = "您好，我想咨询太和里民宿。\n\n";
    message = message + "姓名：" + name + "\n";
    message = message + "联系电话：" + phone + "\n";
    message = message + "入住日期：" + checkIn + "\n";
    message = message + "退房日期：" + checkOut + "\n";
    message = message + "入住人数：" + guestCount + "\n";
    message = message + "是否携带宠物：" + pet + "\n";
    message = message + "备注：" + note + "\n\n";
    message = message + "请问以上日期是否可以预订？谢谢。";

    BookingMessage.value = message;
    CopyStatus.textContent = "咨询信息已生成，可以复制发送给房东。";
};

CopyMessageButton.onclick = function() {
    if (BookingMessage.value === "") {
        CopyStatus.textContent = "请先生成咨询信息。";
        return;
    }

    BookingMessage.select();
    document.execCommand("copy");

    CopyStatus.textContent = "已复制咨询信息。";
};