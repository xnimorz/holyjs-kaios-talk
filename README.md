## Материалы к докладу "бабушкофон и javascript"

Kaios tech: https://www.kaiostech.com/

Presentation: https://excalidraw.com/#json=4676129977794560,s-47Eq6qUgSgm4nQaODeGQ

Flipper: https://fbflipper.com/

ADB: https://developer.android.com/studio/command-line/adb

Firefox with webIDE support: https://ftp.mozilla.org/pub/firefox/releases/59.0/

Короткий список полезных команд:

```
adb devices // returns the list of connected usb devices
adb shell // executes shell cmd, enters to shell access in device
adb shell getprop // returns device properties
adb shell "cat /prop/meminfo" // returns meminfo stats
adb pull {FROM} {TO} // pulls data from the device to PC
adb push {FROM} {TO} // push data from pc to the device
```

[Пример манифеста приложения](/manifest.json)

## Устройство системы

Высокоуровневнове представление:

![Высокоуровневое представление архитектуры приложения](/kaios-top-level.jpg)

Устройство ОС:

![Устройство ОС](/kaios-schema.jpg)

## Обработка mozActivity

![mozActiviy](/kaios-moz-activity.jpg)

## Демо-приложение:

[Демо приложение](/holy.xnim.me)
