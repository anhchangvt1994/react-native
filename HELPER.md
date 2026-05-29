### Lỗi

```
Unable to run simctl:

Error: xcrun simctl help exited with non-zero code: 72

The following packages should be updated for best compatibility with the installed expo version:
```

```
 ERROR  Project is incompatible with this version of Expo Go



• The installed version of Expo Go is for SDK 55.

• The project you opened uses SDK 54.
```

### Giải pháp

```shell
npx expo install expo@^55.0.0 --fix

npx expo start --clear
```

---

