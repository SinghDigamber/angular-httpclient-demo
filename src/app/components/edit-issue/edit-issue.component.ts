import { Component, OnInit, NgZone } from '@angular/core';
import { BugService } from '../../shared/bug.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.css'],
})
export class EditIssueComponent implements OnInit {
  IssuesList: any = [];
  updateIssueForm: FormGroup;

  ngOnInit() {
    this.updateForm();
  }

  constructor(
    private actRoute: ActivatedRoute,
    public bugService: BugService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.bugService.GetIssue(id).subscribe((data) => {
      this.updateIssueForm = this.fb.group({
        issue_name: [data.issue_name],
        issue_message: [data.issue_message],
      });
    });
  }

  updateForm() {
    this.updateIssueForm = this.fb.group({
      issue_name: [''],
      issue_message: [''],
    });
  }

  submitForm() {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.bugService
      .UpdateBug(id, this.updateIssueForm.value)
      .subscribe((res) => {
        this.ngZone.run(() => this.router.navigateByUrl('/issues-list'));
      });
  }
}
