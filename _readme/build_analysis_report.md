# Cline 빌드 환경 및 종속성 분석 보고서

공식 Cline 레포지토리의 소스 코드를 바탕으로 빌드 환경과 주요 종속성(Node.js, gRPC 등)을 분석한 결과입니다.

## 1. Node.js 버전 및 엔진 설정
- **현재 환경**: `v22.22.0` (사용자 시스템 상의 버전)
- **요구 사양**:
    - 루트 및 CLI: `engines: { "node": ">=20.0.0" }`
    - VS Code 확장 프로그램: `engines: { "vscode": "^1.84.0" }`
- **분석**: 현재 Node v22 버전은 프로젝트의 최소 요구 사양(v20 이상)을 충족하므로 기본적으로 문제는 없으나, 최신 Node 버전에서의 네이티브 모듈 컴파일 이슈가 발생할 수 있습니다.

## 2. gRPC 및 Protocol Buffers 분석
Cline은 내부 통신(ProtoBus, Host Bridge)을 위해 gRPC를 적극적으로 사용합니다.

### 주요 종속성
- `@grpc/grpc-js`: 순수 자바스크립트 기반 gRPC 라이브러리.
- `grpc-tools`: `protoc` 바이너리를 포함한 빌드 도구.
- `ts-proto`: TypeScript 코드 생성을 위한 플러그인.
- `nice-grpc`: Promise 기반의 gRPC 클라이언트/서버 구현체.

### 핵심 이슈: Apple Silicon (M1/M2/M3) 호환성
`scripts/build-proto.mjs` 파일 분석 결과, **Apple Silicon 환경에서 중요한 제약 사항**이 확인되었습니다.
- **문제**: `grpc-tools`에 포함된 `protoc` 바이너리는 Intel(x86_64) 기반으로 배포되는 경우가 많아 ARM64 환경에서 직접 실행되지 않을 수 있습니다.
- **대처**: 스크립트 내에 `Rosetta 2` 설치 여부를 확인하는 로직이 포함되어 있습니다. Rosetta 2가 설치되어 있지 않으면 빌드가 중단됩니다.
- **해결 명령어**: `softwareupdate --install-rosetta --agree-to-license`

## 3. 전체 프로젝트 구조 및 빌드 체인
프로젝트는 [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces)를 사용하여 관리됩니다.

- **루트 (`.`)**: 전체 조정 및 VS Code 확장 프로그램 메인 로직.
- **CLI (`./cli`)**: 터미널용 실행 파일.
- **Webview UI (`./webview-ui`)**: 브라우저 기반 사용자 인터페이스 (Vite 사용).

### 주요 빌드 스크립트
- `npm run install:all`: 모든 작업 공간의 종속성을 설치합니다.
- `npm run protos`: gRPC 및 Proto 파일로부터 코드를 생성합니다. (가장 먼저 수행되어야 함)
- `npm run compile`: 전체 프로젝트 컴파일.
- `npm run dev`: 개발 모드 (Watch 모드 포함).

## 4. 잠재적 위험 요소 및 대처 방안
1. **gRPC 빌드 실패**: 
    - 만약 `npm run protos` 실행 시 에러가 발생한다면, 대부분 `protoc` 바이너리 실행 권한 또는 Rosetta 2 부재 문제입니다.
    - `npm install`을 다시 수행하거나 시스템에 `protobuf`를 별도로 설치해야 할 수도 있습니다.
2. **Native Modules (SQLite 등)**:
    - `better-sqlite3` 라이브러리는 네이티브 컴파일이 필요합니다. Node.js 버전 변경 시 `npm rebuild`가 필요할 수 있습니다.
3. **종속성 충돌**:
    - `webview-ui`와 루트 간의 React 버전 차이(v18 vs v19)가 존재할 수 있으므로, 각 내부 폴더에서 개별적으로 `npm install`을 수행하는 것보다 `npm run install:all` 사용을 권장합니다.

---
**보고자**: Antigravity
**날짜**: 2026. 03. 12.
