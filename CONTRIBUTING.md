# Gaea AI Pro 기여 가이드

Gaea AI Pro에 관심을 가져주셔서 감사합니다! 버그 수정, 새로운 기능 추가, 문서 개선 등 모든 기여는 Gaea AI Pro를 더욱 똑똑하게 만드는 데 큰 도움이 됩니다. 건강하고 환영받는 커뮤니티를 유지하기 위해 모든 구성원은 [행동 강령(Code of Conduct)](CODE_OF_CONDUCT.md)을 준수해야 합니다.

## 버그 및 이슈 보고

버그 보고는 Gaea AI Pro를 발전시키는 밑거름이 됩니다! 새로운 이슈를 생성하기 전에, 중복 여부를 확인하기 위해 [기존 이슈](https://github.com/wook8170/gaea-ai-pro/issues)를 먼저 검색해 주세요. 버그를 보고할 준비가 되었다면 [이슈 페이지](https://github.com/wook8170/gaea-ai-pro/issues/new/choose)에서 템플릿에 따라 필요한 정보를 작성해 주시면 됩니다.

<blockquote class='warning-note'>
     🔐 <b>중요:</b> 보안 취약점을 발견한 경우, 공개적인 이슈 대신 <a href="https://github.com/wook8170/gaea-ai-pro/security/advisories/new">GitHub 보안 도구를 사용하여 비공개로 보고</a>해 주세요.
</blockquote>

## 기여하기 전에

사소한 버그 수정, 오타 교정, 단순한 문구 개선 등을 제외한 모든 기여는 GitHub 이슈 생성에서 시작되어야 합니다.

**기능 제안 및 기여 절차:**
1. [기능 요청 토론 게시판](https://github.com/wook8170/gaea-ai-pro/discussions/categories/feature-requests)에서 유사한 아이디어가 있는지 먼저 확인합니다.
2. 새로운 아이디어라면 '새 기능 요청(Feature Request)'을 생성합니다.
3. 구현을 시작하기 전에 핵심 관리자(Core Maintainer)의 승인을 기다려 주세요.
4. 승인된 후에는 자유롭게 Pull Request(PR) 작업을 시작하시면 됩니다!

**승인된 이슈가 없는 PR은 반려될 수 있습니다.**

## 작업 대상 정하기

첫 기여를 고민 중이신가요? ["good first issue"](https://github.com/wook8170/gaea-ai-pro/labels/good%20first%20issue) 또는 ["help wanted"](https://github.com/wook8170/gaea-ai-pro/labels/help%20wanted) 라벨이 붙은 이슈를 확인해 보세요. 커뮤니티의 도움이 필요한 영역들입니다.

[문서 개선](https://github.com/wook8170/gaea-ai-pro/tree/main/docs) 작업도 언제나 환영합니다! 오타 수정부터 안내서 개선, 새로운 교육 콘텐츠 제작까지 다양한 방식으로 참여하실 수 있습니다. `/docs` 폴더에서 개선이 필요한 부분을 찾아보세요.

## 개발 환경 설정

### 로컬 개발 방법

1. 리포지토리를 클론합니다 _([git-lfs](https://git-lfs.com/)가 필요합니다)_:
    ```bash
    git clone https://github.com/wook8170/gaea-ai-pro.git
    ```
2. 프로젝트를 VS Code에서 엽니다:
    ```bash
    code "Gaea AI Pro"
    ```
3. 확장 프로그램과 webview-ui에 필요한 의존성을 설치합니다:
    ```bash
    npm run install:all
    ```
4. Protocol Buffer 파일을 생성합니다 (첫 빌드 전 필수 단계):
    ```bash
    npm run protos
    ```
5. `F5`를 누르거나 `실행` -> `디버깅 시작`을 선택하여 확장 프로그램이 로드된 새로운 VS Code 창을 엽니다. (빌드 오류 시 [esbuild problem matchers extension](https://marketplace.visualstudio.com/items?itemName=connor4312.esbuild-problem-matchers) 설치가 필요할 수 있습니다.)

### Pull Request 생성하기

1. 변경 사항을 커밋합니다.
2. 브랜치를 푸시하고 GitHub에서 PR을 생성합니다. CI(지속적 통합) 시스템이 다음 작업을 수행합니다:
   - 테스트 및 코드 검증 실행
3. 테스트 수행:
    - `npm run test` 명령어로 로컬에서 테스트를 실행합니다.
    - PR을 제출하기 전에 `npm run format:fix`를 실행하여 코드를 정렬해 주세요.

### 확장 프로그램 상세 가이드

1. **VS Code 확장 프로그램**
    - 프로젝트를 열면 VS Code에서 권장 확장 프로그램 설치를 제안합니다. 효율적인 개발을 위해 모두 설치해 주세요.
    - 설치 팝업을 닫았다면 확장 프로그램 패널에서 직접 설치할 수 있습니다.

2. **로컬 개발 워크플로우**
    - `npm run install:all`: 모든 의존성 설치
    - `npm run protos`: Protocol Buffer 파일 생성
    - `npm run test`: 로컬 테스트 실행
    - `npm run dev`: Protos 생성 + Watch 모드 실행 (터미널 워크플로우 권장)
    - `npm run watch`: 파일 변경 감지 및 자동 빌드

3. **Linux 환경 설정**
    Linux에서 테스트를 실행하려면 다음 시스템 라이브러리가 필요합니다:
    `dbus`, `libasound2`, `libatk-bridge2.0-0`, `libatk1.0-0`, `libdrm2`, `libgbm1`, `libgtk-3-0`, `libnss3`, `libx11-xcb1`, `libxcomposite1`, `libxdamage1`, `libxfixes3`, `libxkbfile1`, `libxrandr2`, `xvfb`

    Debian 기반 배포판(예: Ubuntu)의 경우:
    ```bash
    sudo apt update
    sudo apt install -y dbus libasound2 libatk-bridge2.0-0 libatk1.0-0 libdrm2 libgbm1 libgtk-3-0 libnss3 libx11-xcb1 libxcomposite1 libxdamage1 libxfixes3 libxkbfile1 libxrandr2 xvfb
    ```

## 코드 작성 및 제출 규칙

1. **Focus: 하나의 PR에는 하나의 주제만**
    - 하나의 PR은 단일 기능 추가나 버그 수정에 집중해야 합니다.
    - 규모가 큰 변경은 논리적으로 연관된 여러 개의 작은 PR로 나누어 주세요.

2. **코드 품질 유지**
    - `npm run lint`로 코드 스타일을 점검하세요.
    - `npm run format`으로 코드를 자동 정렬하세요.
    - 모든 PR은 린트 및 포맷팅 검사를 통과해야 합니다.
    - TypeScript의 모범 사례를 따르고 타입 안정성을 유지해 주세요.

3. **테스트 필수**
    - 새로운 기능에 대한 테스트를 추가하세요.
    - 수정 사항이 기존 테스트에 영향을 주는지 확인하고 필요시 업데이트하세요.

    **End-to-End (E2E) 테스트**
    Gaea AI Pro는 Playwright를 사용한 포괄적인 E2E 테스트를 포함합니다:
    - `npm run test:e2e`: 전체 E2E 테스트 빌드 및 실행
    - `npm run e2e`: 빌드 없이 테스트 실행
    - `npm run test:e2e -- --debug`: 대화형 디버거와 함께 실행

4. **버전 관리 및 변경 로그**
    - 기여자는 PR에 변경 로그 파일을 직접 추가할 필요가 없습니다.
    - 릴리스 과정에서 관리자가 버전 관리와 변경 로그 정리를 수행합니다.

5. **커밋 메시지 규칙**
    - 명확하고 구체적인 메시지를 작성하세요.
    - Conventional Commits 형식(예: `feat:`, `fix:`, `docs:`)을 사용해 주세요.
    - 관련 이슈가 있다면 `#이슈번호`로 참조해 주세요.

6. **최종 확인**
    - 최신 `main` 브랜치를 기반으로 리베이스(Rebase)하세요.
    - 빌드가 성공하는지, 모든 테스트가 통과하는지 다시 한번 확인하세요.
    - 디버깅 코드나 불필요한 콘솔 로그가 남아있지 않은지 검토하세요.

## 기여 합의

Pull Request를 제출함으로써 귀하의 기여가 프로젝트의 라이선스([Apache 2.0](LICENSE))에 따라 배포되는 것에 동의하게 됩니다.

Gaea AI Pro에 기여하는 것은 단순히 코드를 작성하는 것을 넘어, AI 기반 개발의 미래를 함께 만드는 커뮤니티의 일원이 되는 것입니다. 함께 놀라운 결과물을 만들어 봅시다! 🚀
