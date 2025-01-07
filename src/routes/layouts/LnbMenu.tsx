import DesktopLnb from '../../components/common/DesktopLnb';
import MobileLnb from '../../components/common/MobileLnb';
import { useDeviceDetector } from '../../store/useDevideStore';
import { getActiveMainMenu } from '../../util/activeMenu';

export default function SideNav() {
  const activeMainMenu = getActiveMainMenu();
  // 모바일 상태 감지
  const isMobile = useDeviceDetector();

  // 활성화된 메뉴에 하위 메뉴가 없으면 사이드바를 렌더링하지 않음
  if (!activeMainMenu?.children) {
    return null;
  }

  return <>{isMobile ? <MobileLnb /> : <DesktopLnb />}</>;
}
