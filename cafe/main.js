console.log("main.js!!");

// 月曜日を定休日とするカレンダーを作成
document.addEventListener("DOMContentLoaded", function() {
    const monthElement = document.getElementById("month");
    const calendarDiv = document.getElementById("calendar");
    const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];
    
    // 月の表示（11月）
    monthElement.innerText = "11月";
    
    // 曜日ヘッダーの表示
    daysOfWeek.forEach(day => {
        const dayHeader = document.createElement("div");
        dayHeader.className = "day";
        dayHeader.style.fontWeight = "bold"; // 曜日を太字に
        dayHeader.innerText = day;
        calendarDiv.appendChild(dayHeader);
    });
    
    // 日付の生成（例として11月の1日から30日まで）
    const daysInMonth = 30;
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(2024, 10, day); // 10は11月を指します（JavaScriptの月は0基準）
        const dayDiv = document.createElement("div");
        
        // 月曜日に該当する場合、定休日スタイルを適用
        if (date.getDay() === 1) {
            dayDiv.className = "closed-day";
            dayDiv.innerText = `${day}`;
        } else {
            dayDiv.className = "day";
            dayDiv.innerText = day;
        }
        
        calendarDiv.appendChild(dayDiv);
    }
});

