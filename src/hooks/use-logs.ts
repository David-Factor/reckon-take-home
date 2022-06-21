import { useCallback, useState } from "react";
import { Remote } from "../lib/remote";
import { Store, prependLog } from "../store";
import { Log } from "../types";
import { getLog } from "../api/getLog";
import { usePolling } from "./use-polling";

export const useLogs = (initial: Store) => {
  const [remoteLog, setRemoteLog] = useState<Remote<Log>>(initial.remoteLog);

  const [polling, setPolling] = useState<boolean>(initial.polling);
  const [logs, setLogs] = useState<Log[]>(initial.logs);

  const fetchLogs = useCallback(async () => {
    setRemoteLog({ type: "loading" });
    setRemoteLog(await getLog());

    if (remoteLog.type === "loading") return;
    if (remoteLog.type === "failed") return;
    setLogs(prependLog(remoteLog.data, logs));
  }, [logs, remoteLog]);

  usePolling(polling, fetchLogs);

  return { setPolling, remoteLog, store: { logs, polling } };
};
