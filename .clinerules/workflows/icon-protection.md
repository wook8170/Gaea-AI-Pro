---
description: UI 아이콘 폰트(codicon.ttf) 및 자산 무결성 검증 워크플로우
---

이 워크플로우는 웹뷰 UI 작업 또는 빌드 설정 변경 시 아이콘 표시 문제가 발생하지 않도록 보장하기 위한 필수 절차입니다.

## 1. 사전 경로 확인
// turbo
- `webview-ui/src/index.css` 파일에서 `@vscode/codicons` 참조 코드가 올바른지 확인합니다.
- `StorybookDecorator.tsx` 등 자산 참조 파일의 경로가 변형되지 않았는지 확인합니다.

## 2. 빌드 후 자산 검증
// turbo
- `npm run build:webview` 명령어를 실행하여 빌드를 수행합니다.
- 빌드 완료 후 `webview-ui/build/assets/` 디렉토리에 `codicon.ttf` 파일이 정상적으로 복사/생성되었는지 확인합니다.

## 3. 브라우저 에이전트 확인 (권장)
- 브라우저 에이전트를 사용하여 실제 화면에서 아이콘(예: 설정 기어 아이콘, 로그 아이콘 등)이 깨지지 않고 올바르게 표시되는지 육안으로 확인합니다.

> [!IMPORTANT]
> 리브랜딩이나 문자열 대량 치환 작업 시 `node_modules` 경로가 포함된 문자열이 의도치 않게 변경되지 않도록 각별히 유의해야 합니다.
