import { useMemo } from "react";

export default function BackgroundLogs({ darkMode }) {
  const logs = useMemo(
    () => [
      "[INFO]  o.s.b.w.e.t.TomcatWebServer         : Tomcat initialized with port 8080 (http)",
      "[DEBUG] c.z.h.p.HikariPool                  : HikariPool-1 - Added connection org.postgresql.jdbc.PgConnection",
      "[INFO]  c.v.p.PortfolioApplication          : Started PortfolioApplication in 1.482s (JVM running for 2.105s)",
      "[GET]   /api/v1/projects                    : 200 OK (duration=14ms, pool_connections=1, bytes=4096)",
      "[CACHE] r.c.j.JedisPool                     : CACHE_HIT key=\"user:session:auth\" ttl=3580s",
      "[INFO]  o.s.s.w.DefaultSecurityFilterChain  : Created filter chain: [SecurityContextHolderFilter, JwtAuthFilter]",
      "[DEBUG] o.h.e.t.i.TransactionImpl           : Transaction committed successfully (isolation=READ_COMMITTED)",
      "[POST]  /api/v1/contact                     : 200 OK (payload_delivered=true, transport=SMTP)",
      "[INFO]  c.v.service.NotificationService     : Dispatching async message event -> mail worker queue",
      "[DEBUG] c.z.h.p.HikariPool                  : HikariPool-1 - Pool stats (total=10, active=2, idle=8, waiting=0)",
      "[INFO]  o.a.k.clients.NetworkClient         : Node -1 connected to localhost:9092",
      "[GET]   /health                             : 200 OK (status=UP, database=UP, redis=UP, diskSpace=UP)",
      "[DEBUG] o.s.web.servlet.DispatcherServlet   : Completed 200 OK for [GET /api/v1/education]",
      "[INFO]  o.s.b.a.e.w.EndpointLinksResolver   : Exposing 14 endpoint(s) beneath base path '/actuator'",
      "[DEBUG] c.v.security.JwtProvider            : Validated RS256 JWT signature for principal id=2408",
      "[INFO]  c.v.repository.ProjectRepository    : Executed native query in 3ms (rows=6, cost=0.08)",
      "[DEBUG] o.s.c.s.DefaultLifecycleProcessor   : Starting beans in phase 0",
      "[INFO]  o.s.d.r.c.RepositoryConfiguration   : Bootstrapping Spring Data JPA repositories in DEFAULT mode",
      "[DEBUG] c.z.h.p.HikariPool                  : HikariPool-1 - Pool stats (total=10, active=0, idle=10, waiting=0)",
      "[INFO]  c.v.p.PortfolioApplication          : Memory heap: used=184MB, max=4096MB, gc_overhead=0.02%",
    ],
    []
  );

  // Repeat logs to allow seamless infinite loop
  const duplicatedLogs = [...logs, ...logs];

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none select-none overflow-hidden z-0"
      style={{
        maskImage:
          "radial-gradient(ellipse 80% 70% at 50% 35%, black 40%, transparent 85%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 70% at 50% 35%, black 40%, transparent 85%)",
      }}
    >
      <div
        className={`w-full font-mono text-[11px] leading-[26px] tracking-tight px-6 pt-16 flex flex-col transition-colors duration-300 ${
          darkMode ? "text-neutral-500 opacity-[0.08]" : "text-neutral-700 opacity-[0.06]"
        } animate-log-stream`}
      >
        {duplicatedLogs.map((log, index) => (
          <div key={index} className="truncate whitespace-nowrap">
            {log}
          </div>
        ))}
      </div>
    </div>
  );
}
