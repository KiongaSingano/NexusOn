import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface AnnouncementContextType {
  announcementVisible: boolean;
  closeAnnouncement: () => void;
}

const AnnouncementContext =
  createContext<AnnouncementContextType | undefined>(
    undefined
  );

const STORAGE_KEY = "nexuson-announcement-closed";

export function AnnouncementProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [announcementVisible, setAnnouncementVisible] =
    useState(() => {
      const closed = sessionStorage.getItem(STORAGE_KEY);

      return closed !== "true";
    });

  const closeAnnouncement = () => {
    sessionStorage.setItem(STORAGE_KEY, "true");
    setAnnouncementVisible(false);
  };

  return (
    <AnnouncementContext.Provider
      value={{
        announcementVisible,
        closeAnnouncement,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
}

export function useAnnouncement() {
  const context = useContext(AnnouncementContext);

  if (!context) {
    throw new Error(
      "useAnnouncement deve ser usado dentro de AnnouncementProvider"
    );
  }

  return context;
}