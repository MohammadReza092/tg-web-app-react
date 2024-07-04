const app = window.Telegram.WebApp;
export const useTelegram = () => {

    const onClose = () =>{
        app.close();
    }

    const onToggleButton = (visible) => {
        app.MainButton.setParams({
            text : 'VIEW ORDER',
            button_color : '#00b822',
            is_visible : visible,
        })
    }

    return {
        onClose,
        onToggleButton,
        app,
        user : app.initDataUnsafe?.user,
    }
}