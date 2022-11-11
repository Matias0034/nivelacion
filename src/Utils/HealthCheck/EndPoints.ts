//! Dependencies
import Express, { Router } from 'express';
import { LivenessEndpoint, HealthChecker, ReadinessEndpoint } from '@cloudnative/health-connect';


export class Health {

	private readonly router: Router = Express.Router();
	private readonly healthChecker = new HealthChecker();

	private liveness(): void {
		this.router.get('/live', LivenessEndpoint(this.healthChecker));
	}

	private readiness(): void {
		this.router.get('/ready',  ReadinessEndpoint(this.healthChecker));
	}

	public init(): Router {
		this.liveness();
		this.readiness();

		return this.router;
	}

}