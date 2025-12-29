import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

// 언어 설정 상수
const DEFAULT_LOCALE = "en";
const SUPPORTED_LOCALES = ["ko", "en"];

/**
 * @returns {string} API URL
 */
function getChangeLanguageApiUrl() {
    if (!ExecutionEnvironment.canUseDOM) {
        return "https://oasisserver.link/api/change-language";
    }
    const hostname = window.location.hostname;
    if (hostname === "localhost") {
        return `http://localhost:5173/api/change-language`;
    }
    return "https://oasisserver.link/api/change-language";
}

/**
 * URL 경로에서 언어 코드를 추출합니다.
 * Docusaurus는 기본 언어는 URL에 포함하지 않고, 다른 언어는 첫 번째 세그먼트에 포함합니다.
 * @param {string} pathname - 현재 경로
 * @returns {string} 언어 코드
 */
function extractLocaleFromPath(pathname) {
    // 경로에서 첫 번째 세그먼트 추출
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length === 0) {
        return DEFAULT_LOCALE;
    }

    const firstSegment = segments[0];

    // 첫 번째 세그먼트가 지원되는 언어 코드인지 확인
    if (SUPPORTED_LOCALES.includes(firstSegment)) {
        return firstSegment;
    }

    // 기본 언어 (URL에 언어 코드가 없는 경우)
    return DEFAULT_LOCALE;
}

/**
 * API를 통해 언어 쿠키를 설정합니다.
 * @param {string} locale - 설정할 언어 코드
 */
async function setLocaleCookie(locale) {
    if (!ExecutionEnvironment.canUseDOM) {
        return;
    }

    try {
        const formData = new FormData();
        formData.append("lng", locale);

        const apiUrl = getChangeLanguageApiUrl();
        const response = await fetch(apiUrl, {
            method: "POST",
            body: formData,
            credentials: "include",
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error(
                "Failed to set locale cookie:",
                errorData.error || response.statusText
            );
            return;
        }
    } catch (error) {
        console.error("Error setting locale cookie:", error);
    }
}

export function onRouteUpdate({ location, previousLocation }) {
    if (!ExecutionEnvironment.canUseDOM) {
        return;
    }

    if (location.pathname !== previousLocation?.pathname) {
        const currentLocale = extractLocaleFromPath(location.pathname);
        setLocaleCookie(currentLocale);
    }
}
