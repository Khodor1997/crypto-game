<template>
    <header>
        <div class="header">
            <div>
                <span class="header__title">MOON or DOOM</span>
            </div>
            <div>
                <button class="button">Invite</button>
                <button class="button">0.00313</button>
                <button class="button">Mute</button>
            </div>
        </div>
    </header>
</template>
<style scoped>
header{
    display: flex;
    border-bottom: 1px solid #384250;
}
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #111927;
    width: 100%;
    height: 40px;
    padding: 12px 16px;
}
.header__title {
    font-family: "Space Grotesk", sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
}
.button {
    font-family: "Space Grotesk", sans-serif;
    height: 38px;
    padding: 0 12px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: 600;
    color: #F9FAFB;
    background: inherit;
    border-radius: 12px;
    border: 1px solid #384250;
    cursor: pointer;
    transition: .3s;
}
.button:hover {
    background: rgba(255, 255, 255, 0.1);
}
.button:first-child {
    margin-left: 0;
}
</style>